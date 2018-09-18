class SportsSuppliesController < ApplicationController
  before_action :set_sports_supply, only: [:show, :edit, :update, :destroy]

  # GET /sports_supplies
  # GET /sports_supplies.json
  def index
    @sports_supplies = SportsSupply.all
  end

  # GET /sports_supplies/1
  # GET /sports_supplies/1.json
  def show
  end

  # GET /sports_supplies/new
  def new
    @sports_supply = SportsSupply.new
  end

  # GET /sports_supplies/1/edit
  def edit
  end

  # POST /sports_supplies
  # POST /sports_supplies.json
  def create
    @sports_supply = SportsSupply.new(sports_supply_params)

    respond_to do |format|
      if @sports_supply.save
        format.html { redirect_to @sports_supply, notice: 'Sports supply was successfully created.' }
        format.json { render :show, status: :created, location: @sports_supply }
      else
        format.html { render :new }
        format.json { render json: @sports_supply.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sports_supplies/1
  # PATCH/PUT /sports_supplies/1.json
  def update
    respond_to do |format|
      if @sports_supply.update(sports_supply_params)
        format.html { redirect_to @sports_supply, notice: 'Sports supply was successfully updated.' }
        format.json { render :show, status: :ok, location: @sports_supply }
      else
        format.html { render :edit }
        format.json { render json: @sports_supply.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sports_supplies/1
  # DELETE /sports_supplies/1.json
  def destroy
    @sports_supply.destroy
    respond_to do |format|
      format.html { redirect_to sports_supplies_url, notice: 'Sports supply was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sports_supply
      @sports_supply = SportsSupply.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sports_supply_params
      params.require(:sports_supply).permit(:name)
    end
end
