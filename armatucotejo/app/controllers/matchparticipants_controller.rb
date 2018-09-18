class MatchparticipantsController < ApplicationController
  before_action :set_matchparticipant, only: [:show, :edit, :update, :destroy]

  # GET /matchparticipants
  # GET /matchparticipants.json
  def index
    @matchparticipants = Matchparticipant.all
  end

  # GET /matchparticipants/1
  # GET /matchparticipants/1.json
  def show
  end

  # GET /matchparticipants/new
  def new
    @matchparticipant = Matchparticipant.new
  end

  # GET /matchparticipants/1/edit
  def edit
  end

  # POST /matchparticipants
  # POST /matchparticipants.json
  def create
    @matchparticipant = Matchparticipant.new(matchparticipant_params)

    respond_to do |format|
      if @matchparticipant.save
        format.html { redirect_to @matchparticipant, notice: 'Matchparticipant was successfully created.' }
        format.json { render :show, status: :created, location: @matchparticipant }
      else
        format.html { render :new }
        format.json { render json: @matchparticipant.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /matchparticipants/1
  # PATCH/PUT /matchparticipants/1.json
  def update
    respond_to do |format|
      if @matchparticipant.update(matchparticipant_params)
        format.html { redirect_to @matchparticipant, notice: 'Matchparticipant was successfully updated.' }
        format.json { render :show, status: :ok, location: @matchparticipant }
      else
        format.html { render :edit }
        format.json { render json: @matchparticipant.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /matchparticipants/1
  # DELETE /matchparticipants/1.json
  def destroy
    @matchparticipant.destroy
    respond_to do |format|
      format.html { redirect_to matchparticipants_url, notice: 'Matchparticipant was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_matchparticipant
      @matchparticipant = Matchparticipant.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def matchparticipant_params
      params.require(:matchparticipant).permit(:playerid, :matchid)
    end
end
