var Todo = require('./models/todo');

function getTodos(res){
	Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		getTodos(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			priority: req.body.priority,
			startDate:req.body.startDate,
			endDate:req.body.endDate,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getTodos(res);
		});

	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});

	//Update
    app.put('/api/todos/:todo_id',function(req,res){
         /*
			Todo.findById(req.params.todo_id,function(err,todo){
				todo.text=req.body.text;
				todo.priority= req.body.priority;
                
				todo.save(function(err){
					if(err)
						 res.send(500,err.message);
					getTodos(res);
				});


			});*/
       var todoa=new Todo({
            text:req.body.text,
         	priority:req.body.priority,
         	startDate:req.body.startDate
       });

       var todoData= todoa.toObject();
       delete todoData._id;


        Todo.update({
        	_id:req.params.todo_id
        },
         todoData,
         {
         	upsert:true
         },function(err,todo){
         	if (err)
				res.send(err);
        });
			
      
    });

  // application ---------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};