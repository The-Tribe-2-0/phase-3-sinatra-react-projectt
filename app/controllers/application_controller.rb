class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  get '/api/todos' do
    todos = Todo.all
    todos.to_json
  end

  post '/api/todos' do
    todo = Todo.new(title: params[:title], description: params[:description], category_id: params[:category_id])
    if todo.save
      todo.to_json
    else
      status 400
      { error: 'Failed to create todo' }.to_json
    end
  end

  patch '/api/todos/:id' do
    todo = Todo.find(params[:id])
    if todo.update(title: params[:title], description: params[:description], category_id: params[:category_id])
      todo.to_json
    else
      status 400
      { error: 'Failed to update todo' }.to_json
    end
  end
  delete '/api/todos/:id' do
    todo = Todo.find(params[:id])
    if todo.destroy
      { success: 'Todo deleted successfully' }.to_json
    else
      status 400
      { error: 'Failed to delete todo' }.to_json
    end
  end
end
