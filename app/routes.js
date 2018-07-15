var mytask= require('./models/task');
function doTask(res){
mytask.find(function(err, task) {
			if (err)
				res.send(err)

			res.json(task); 
		});
};
module.exports = function(app) {

	app.get('/api/tasks', function(req, res) {
		doTask(res);
	});
	app.post('/api/tasks', function(req, res) {
		task.create({
			Title : req.body.Title ,
			done : false,
		Description : req.body.Description,
			done : false,
		Owner : req.body.Owner,
			done : false,
		Status : req.body.Status,
			done : false,
		ApplicationId: req.body.ApplicationId,
		done:false
		},

		 function (err, tasks) {

			if (err)
				res.send(err);

			doTask(res);
		});
   })

app.delete('/api/tasks/:id', function(req, res) {
		task.remove({
			_id : req.params.id
		}, function(err, todo) {
			if (err)
				res.send(err);

			doTask(res);
		});
	});
	
	app.get('*', function(req, res) {
		res.sendfile('./public/mytask.html'); 
	});
};
