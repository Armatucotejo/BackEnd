class PlayersController < ApplicationController
  before_action :set_player, only: [:show, :edit, :update, :destroy]


  def getPlayersByPunctuality
    params.require(:score)
    score = params[:score]
    @players = Player.where(scorepunctuality: score)
  end

  def getPlayersBySportsmanship
    params.require(:score)
    score = params[:score]
    @players = Player.where(score_sportsmanship: score)
  end

  def getPlayersBySkill
    params.require(:score)
    score = params[:score]
    @players = Player.where(score_skill: score)
  end

  def getPlayersByScorefairplay
    params.require(:score)
    score = params[:score]
    @players = Player.where(scorefairplay: score)
  end


  def joinEvent 
    params.require(:username)
    params.require(:event_id)
    @user = ::User.where(username: params[:username]).first
    @player = Player.find_by(id: @user.user_data_id)
    @match_participant = MatchParticipant.create(player_id: @player.id, match_id: params[:event_id])
  end


  def createEvent 
    puts "createEvent"
    params.require(:username)
    params.require(:sport)
    params.require(:location_id)
    @user = ::User.where(username: params[:username]).first
    @sport = ::Sport.find_by(name: params[:sport])
    @match = Match.create(description: "", duration: 2, dkatetime: fecha, location_id: params[:location_id], sport_id: @sport.id, organizer_id: @user.id)
    @match.save
    @match_participant = Match.create(player_id, organizer_id: @user.id)
  end


  def changeGender
    params.require(:username)
    params.require(:new_gender)
    @user = ::User.where(username: params[:username]).first
    @player = Player.find_by(id: @user.user_data_id)
    @player.gender = params[:new_gender]
    @player.save
  end


  def changeCellphone
    params.require(:username)
    params.require(:new_cellphone)
    @user = ::User.where(username: params[:username]).first
    @player = Player.find_by(id: @user.user_data_id)
    @player.cellphone = params[:new_cellphone]
    @player.save
  end


  # GET /players
  # GET /players.json
  def index
    #@players = Player.all
    @players = Player.paginate(page: params[:page], per_page:5)
  end

  # GET /players/1
  # GET /players/1.json
  def show
  end

  # GET /players/new
  def new
    @player = Player.new
  end

  # GET /players/1/edit
  def edit
  end

  # POST /players
  # POST /players.json
  def create
    #Existe un error al crear los players
    @player = Player.new(player_params)

    respond_to do |format|
      if @player.save
        format.html { redirect_to @player, notice: 'Player was successfully created.' }
        format.json { render :show, status: :created, location: @player }
      else
        format.html { render :new }
        format.json { render json: @player.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /players/1
  # PATCH/PUT /players/1.json
  def update
    respond_to do |format|
      if @player.update(player_params)
        format.html { redirect_to @player, notice: 'Player was successfully updated.' }
        format.json { render :show, status: :ok, location: @player }
      else
        format.html { render :edit }
        format.json { render json: @player.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /players/1
  # DELETE /players/1.json
  def destroy
    @player.destroy
    respond_to do |format|
      format.html { redirect_to players_url, notice: 'Player was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      @player = Player.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def player_params

      params.require(:player).permit(:birth, :gender, :cellphone, :scorepunctuality, :scorefairplay, :score_skill)

    end
end
