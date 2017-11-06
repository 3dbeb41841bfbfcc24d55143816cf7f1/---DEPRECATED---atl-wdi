class PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    @posts = current_user.posts

    render json: @posts
  end

  def show
    @post = Post.find(params[:id])

    render json: @post
  end

  def create
    @user = current_user
    @post = @user.posts.build(post_params)

    if @user.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find(params[:id])


    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id]).delete

    render status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end