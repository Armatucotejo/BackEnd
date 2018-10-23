class MatchParticipantsController < ApplicationController
  before_action :set_match_participant, only: [:show, :edit, :update, :destroy]

  def getPlayersInMatch
    params.require(:match_id)
    @match_id = params[:match_id]
    @players = MatchParticipant.joins(:match, :user).where(match_id: @match_id)
  end

  # GET /match_participants
  # GET /match_participants.json
  def index
    @match_participants = MatchParticipant.paginate(page: params[:page], per_page:5)
  end

  # GET /match_participants/1
  # GET /match_participants/1.json
  def show
  end

  # GET /match_participants/new
  def new
    @match_participant = MatchParticipant.new
  end

  # GET /match_participants/1/edit
  def edit
  end

  # POST /match_participants
  # POST /match_participants.json
  def create
    @match_participant = MatchParticipant.new(match_participant_params)

    respond_to do |format|
      if @match_participant.save
        format.html { redirect_to @match_participant, notice: 'Match participant was successfully created.' }
        format.json { render :show, status: :created, location: @match_participant }
      else
        format.html { render :new }
        format.json { render json: @match_participant.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /match_participants/1
  # PATCH/PUT /match_participants/1.json
  def update
    respond_to do |format|
      if @match_participant.update(match_participant_params)
        format.html { redirect_to @match_participant, notice: 'Match participant was successfully updated.' }
        format.json { render :show, status: :ok, location: @match_participant }
      else
        format.html { render :edit }
        format.json { render json: @match_participant.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /match_participants/1
  # DELETE /match_participants/1.json
  def destroy
    @match_participant.destroy
    respond_to do |format|
      format.html { redirect_to match_participants_url, notice: 'Match participant was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_match_participant
      @match_participant = MatchParticipant.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def match_participant_params
      params.fetch(:match_participant, {})
    end
end
