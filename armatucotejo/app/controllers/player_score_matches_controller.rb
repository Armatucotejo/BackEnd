class PlayerScoreMatchesController < ApplicationController
  before_action :set_player_score_match, only: [:show, :edit, :update, :destroy]

  # GET /player_score_matches
  # GET /player_score_matches.json
  def index

    @player_score_matches = PlayerScoreMatch.paginate(page: params[:page], per_page:5)

  end

  # GET /player_score_matches/1
  # GET /player_score_matches/1.json
  def show

    @player_score_matches = PlayerScoreMatch.jugador.scoresReciv

  end

  # GET /player_score_matches/new
  def new
    @player_score_match = PlayerScoreMatch.new
  end

  # GET /player_score_matches/1/edit
  def edit
  end

  # POST /player_score_matches
  # POST /player_score_matches.json
  def create
    @player_score_match = PlayerScoreMatch.new(player_score_match_params)

    respond_to do |format|
      if @player_score_match.save
        format.html { redirect_to @player_score_match, notice: 'Player score match was successfully created.' }
        format.json { render :show, status: :created, location: @player_score_match }
      else
        format.html { render :new }
        format.json { render json: @player_score_match.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /player_score_matches/1
  # PATCH/PUT /player_score_matches/1.json
  def update
    respond_to do |format|
      if @player_score_match.update(player_score_match_params)
        format.html { redirect_to @player_score_match, notice: 'Player score match was successfully updated.' }
        format.json { render :show, status: :ok, location: @player_score_match }
      else
        format.html { render :edit }
        format.json { render json: @player_score_match.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /player_score_matches/1
  # DELETE /player_score_matches/1.json
  def destroy
    @player_score_match.destroy
    respond_to do |format|
      format.html { redirect_to player_score_matches_url, notice: 'Player score match was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player_score_match
      @player_score_match = PlayerScoreMatch.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def player_score_match_params

      params.require(:player_score_match).permit(:playerqualifier, :playerqualified, :scorepunctuality, :scorefairplay, :match)

    end
end
