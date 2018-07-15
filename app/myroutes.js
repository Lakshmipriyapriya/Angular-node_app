var Task = require('../../models/task');
var createMyTaskDetails= function (req, res) {
	var tasks = new Task({
			Title : req.body.Title ,
			 Description : req.body. Description,
			  Owner : req.body.  Owner,
			 Status : req.body. Status,
			 applicationId:req.body.applicationId
		});
	return tasks.save(function (err) {
		if (!err) {
			logger.info("Task detailscreated");
			return res.json({
				stausCode : 200,
				Task:tasks
			});
		} else {
			logger.error(err);
			if (err.name == 'ValidationError') {
				res.json({
					statusCode : 400,
					error : 'Validation error'
				});
			} else {
				res.json({
					statusCode : 500,
					error : 'API Server error'
				});
			}
			logger.error('Internal error(%d): %s', res.statusCode, err.message);
		}
	});
}
var getMyTaskDetails = function (req, res) {
	logger.info("GET all task users");
	return Task.find(function (err, Task) {
		if (!err) {
			return res.send(Task);
		} else {
			res.statusCode = 500;
			logger.error('Internal error(%d): %s', res.statusCode, err.message);
			 res.json({
				error : 'Server error'
			});
		}
	});
}
var getOneTaskDetails = function (req, res) {
	return Task.findById(req.params.id, function (err, task) {
		console.log(task)
		if (!err) {
			logger.info('User task info has been retrieved successfully');
			return res.json({
				statusCode : 200,
				task:task
			});
		} else {
			if (err.name == 'ValidationError') {
				res.json({
					statusCode : 400,
					error : 'Validation error'
				});
			} else {
				res.json({
					statusCode : 500,
					error : 'Server error'
				});
			}
			logger.error('Internal error(%d): %s', res.statusCode, err.message);
		}
	});
}
var updateMyTaskDetails = function (req, res) {
	return Task.findById( req.params.id, function (err, task) {
console.log('task id.....',req.params.id);
console.log('details:',task)
	
		if (!task && task.length == 0) {
			return res.json({
				statusCode : 404,
				error : 'Not found'
			});
		}
		if (req.body.Title!= null)
			task.Title = req.body.Title;
		if (req.body.Description != null)
			task.Description = req.body.Description;
		if (req.body.Owner!= null)
			task.Owner = req.body.Owner;
		if (req.body. Status != null)
			task. Status = req.body. Status;
		if(req.body.applicationId!=null)
			task.applicationId=req.applicationId;
		return task.save(function (err) {
			if (!err) {
				logger.info('User info has been updated');
				return res.json({
					statusCode : 200,
					task : task
				});
			} else {
				if (err.name == 'ValidationError') {
					res.json({
						statusCode : 400,
						error : 'Validation error'
					});
				} else {
					res.json({
						statusCode : 500,
						error : 'Server error'
					});
				}
				logger.error('Internal error(%d): %s', res.statusCode, err.message);
			}
		});
	});
}
var deleteMyTaskDetails = function (req, res) {
	return Task.findById(req.params.id, function (err, tasks) {
		console.log('task id.....',req.params.id);
		if (!tasks) {
			return res.json({
				statusCode : 404,
				error : 'Not found'
			});
		}

		return tasks.remove(function (err) {
			if (!err) {
				logger.info('Removed user successfully');
				 return res.json({
					status : 200
				});
			} else {
				logger.error('Internal error(%d): %s', res.statusCode, err.message);
				 return res.json({
					statusCode : 500,
					error : 'Server error'
				});
			}
		})
	});
}

 
exports.getOneTaskDetails=getOneTaskDetails 
 exports.deleteMyTaskDetails=deleteMyTaskDetails
 exports.getMyTaskDetails = getMyTaskDetails
 exports.createMyTaskDetails=createMyTaskDetails
 exports.updateMyTaskDetails=updateMyTaskDetails
