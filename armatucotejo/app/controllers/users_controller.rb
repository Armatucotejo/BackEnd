class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  def addSportInterest
    @sport = Sport.find(name: params[:sport][:name])
    @user = User.find(id: params[:user][:id])
    @player = Player.find(id: @user.user_data_id)
    @sport_interest = SportInterest.new(player_id: @player.id,
					sport_id: @sport.id)
    if @sport_interest.save!
      render json: @sport_interest, status: :ok
    else
      render json: @sport_interest.errors , status: :unprocessable_entity
    end
  end

  def removeSportInterest
    @sport = Sport.find(name: params[:sport][:name])
    @user = User.find(id: params[:user][:id])
    @player = Player.find(id: @user.user_data_id)
    @sport_interest = SportInterest.where(player_id: @player.id, sport_id: @sport.id)
    @sport_interest.destroy
  end

 def changeName
    params.require(:username)
    params.require(:new_name)
    @user = ::User.where(username: params[:username]).first
    @user.name = params[:new_name]
    @user.save
  end


  def changeUsername
    params.require(:username)
    params.require(:new_username)
    @user = ::User.where(username: params[:username]).first
    @user.username = params[:new_username]
    @user.save
  end

  def changeEmail
    params.require(:username)
    params.require(:new_email)
    @user = ::User.where(username: params[:username]).first
    @user.email = params[:new_email]
    @user.save
  end


  # GET /users
  # GET /users.json
  def index
    @users = User.paginate(page: params[:page], per_page:50)
    render json: @users, status: :ok
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    puts 'Holaaaaaaaaaaaaaaaaaaaaaaaa'
    puts user_params
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
        puts @users
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  def changeName
    params.require(:username)
    params.require(:new_name)
    @user = ::User.where(username: params[:username]).first
    @user.name = params[:new_name]
    @user.save
  end

  def loginown
    params.require(:username)
    params.require(:password)
    @user = ::User.where(username: params[:username]).first
    puts @user
    puts @user.password 
    puts params[:password]
    if(@user.nil? || @user.password != params[:password])
      render json: @user, status: :unprocessable_entity
    else 
      puts  DateTime.now
      puts "hola"
      @user.logindate = DateTime.now
      @user.save
      render json: @users, status: :ok
    end
  end

  def changeUsername
    params.require(:username)
    params.require(:new_username)
    @user = ::User.where(username: params[:username]).first
    @user.username = params[:new_username]
    @user.save
  end

  def changeEmail
    params.require(:username)
    params.require(:new_email)
    @user = ::User.where(username: params[:username]).first
    @user.email = params[:new_email]
    @user.save
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
       @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :password, :name, :username, :user_data_type, :user_data_id, :birth, :gender, :cellphone, :scorepunctuality, :scorefairplay, :scorepunctuality, :score_skill)
    end
  end
