class SportsClubsController < ApplicationController
  before_action :set_sports_club, only: [:show, :edit, :update, :destroy]

  # GET /sports_clubs
  # GET /sports_clubs.json
  def index
    @sports_clubs = SportsClub.paginate(page: params[:page], per_page:5)
  end

  # GET /sports_clubs/1
  # GET /sports_clubs/1.json
  def show
  end

  # GET /sports_clubs/new
  def new
    @sports_club = SportsClub.new
  end

  # GET /sports_clubs/1/edit
  def edit
  end

  # POST /sports_clubs
  # POST /sports_clubs.json
  def create
    @sports_club = SportsClub.new(sports_club_params)

    respond_to do |format|
      if @sports_club.save
        format.html { redirect_to @sports_club, notice: 'Sports club was successfully created.' }
        format.json { render :show, status: :created, location: @sports_club }
      else
        format.html { render :new }
        format.json { render json: @sports_club.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sports_clubs/1
  # PATCH/PUT /sports_clubs/1.json
  def update
    respond_to do |format|
      if @sports_club.update(sports_club_params)
        format.html { redirect_to @sports_club, notice: 'Sports club was successfully updated.' }
        format.json { render :show, status: :ok, location: @sports_club }
      else
        format.html { render :edit }
        format.json { render json: @sports_club.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sports_clubs/1
  # DELETE /sports_clubs/1.json
  def destroy
    @sports_club.destroy
    respond_to do |format|
      format.html { redirect_to sports_clubs_url, notice: 'Sports club was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sports_club
      @sports_club = SportsClub.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sports_club_params
      params.require(:sports_club).permit(:mainaddress)
    end
end
