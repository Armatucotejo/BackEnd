class LocationSupportsSportsController < ApplicationController
  before_action :set_location_supports_sport, only: [:show, :edit, :update, :destroy]

  # GET /location_supports_sports
  # GET /location_supports_sports.json
  def index
    @location_supports_sports = LocationSupportsSport.paginate(page: params[:page], per_page:5)
  end

  # GET /location_supports_sports/1
  # GET /location_supports_sports/1.json
  def show
  end

  # GET /location_supports_sports/new
  def new
    @location_supports_sport = LocationSupportsSport.new
  end

  # GET /location_supports_sports/1/edit
  def edit
  end

  # POST /location_supports_sports
  # POST /location_supports_sports.json
  def create
    @location_supports_sport = LocationSupportsSport.new(location_supports_sport_params)

    respond_to do |format|
      if @location_supports_sport.save
        format.html { redirect_to @location_supports_sport, notice: 'Location supports sport was successfully created.' }
        format.json { render :show, status: :created, location: @location_supports_sport }
      else
        format.html { render :new }
        format.json { render json: @location_supports_sport.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /location_supports_sports/1
  # PATCH/PUT /location_supports_sports/1.json
  def update
    respond_to do |format|
      if @location_supports_sport.update(location_supports_sport_params)
        format.html { redirect_to @location_supports_sport, notice: 'Location supports sport was successfully updated.' }
        format.json { render :show, status: :ok, location: @location_supports_sport }
      else
        format.html { render :edit }
        format.json { render json: @location_supports_sport.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /location_supports_sports/1
  # DELETE /location_supports_sports/1.json
  def destroy
    @location_supports_sport.destroy
    respond_to do |format|
      format.html { redirect_to location_supports_sports_url, notice: 'Location supports sport was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location_supports_sport
      @location_supports_sport = LocationSupportsSport.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def location_supports_sport_params
      params.fetch(:location_supports_sport, {})
    end
end
