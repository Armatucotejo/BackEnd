class LocationsupportssportsController < ApplicationController
  before_action :set_locationsupportssport, only: [:show, :edit, :update, :destroy]

  # GET /locationsupportssports
  # GET /locationsupportssports.json
  def index
    @locationsupportssports = Locationsupportssport.all
  end

  # GET /locationsupportssports/1
  # GET /locationsupportssports/1.json
  def show
  end

  # GET /locationsupportssports/new
  def new
    @locationsupportssport = Locationsupportssport.new
  end

  # GET /locationsupportssports/1/edit
  def edit
  end

  # POST /locationsupportssports
  # POST /locationsupportssports.json
  def create
    @locationsupportssport = Locationsupportssport.new(locationsupportssport_params)

    respond_to do |format|
      if @locationsupportssport.save
        format.html { redirect_to @locationsupportssport, notice: 'Locationsupportssport was successfully created.' }
        format.json { render :show, status: :created, location: @locationsupportssport }
      else
        format.html { render :new }
        format.json { render json: @locationsupportssport.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /locationsupportssports/1
  # PATCH/PUT /locationsupportssports/1.json
  def update
    respond_to do |format|
      if @locationsupportssport.update(locationsupportssport_params)
        format.html { redirect_to @locationsupportssport, notice: 'Locationsupportssport was successfully updated.' }
        format.json { render :show, status: :ok, location: @locationsupportssport }
      else
        format.html { render :edit }
        format.json { render json: @locationsupportssport.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /locationsupportssports/1
  # DELETE /locationsupportssports/1.json
  def destroy
    @locationsupportssport.destroy
    respond_to do |format|
      format.html { redirect_to locationsupportssports_url, notice: 'Locationsupportssport was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_locationsupportssport
      @locationsupportssport = Locationsupportssport.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def locationsupportssport_params
      params.require(:locationsupportssport).permit(:sport, :location)
    end
end
