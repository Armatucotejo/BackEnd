class StoreHasSuppliesController < ApplicationController
  before_action :set_store_has_supply, only: [:show, :edit, :update, :destroy]

  # GET /store_has_supplies
  # GET /store_has_supplies.json
  def index
    @store_has_supplies = StoreHasSupply.all
  end

  # GET /store_has_supplies/1
  # GET /store_has_supplies/1.json
  def show
  end

  # GET /store_has_supplies/new
  def new
    @store_has_supply = StoreHasSupply.new
  end

  # GET /store_has_supplies/1/edit
  def edit
  end

  # POST /store_has_supplies
  # POST /store_has_supplies.json
  def create
    @store_has_supply = StoreHasSupply.new(store_has_supply_params)

    respond_to do |format|
      if @store_has_supply.save
        format.html { redirect_to @store_has_supply, notice: 'Store has supply was successfully created.' }
        format.json { render :show, status: :created, location: @store_has_supply }
      else
        format.html { render :new }
        format.json { render json: @store_has_supply.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /store_has_supplies/1
  # PATCH/PUT /store_has_supplies/1.json
  def update
    respond_to do |format|
      if @store_has_supply.update(store_has_supply_params)
        format.html { redirect_to @store_has_supply, notice: 'Store has supply was successfully updated.' }
        format.json { render :show, status: :ok, location: @store_has_supply }
      else
        format.html { render :edit }
        format.json { render json: @store_has_supply.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /store_has_supplies/1
  # DELETE /store_has_supplies/1.json
  def destroy
    @store_has_supply.destroy
    respond_to do |format|
      format.html { redirect_to store_has_supplies_url, notice: 'Store has supply was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_store_has_supply
      @store_has_supply = StoreHasSupply.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def store_has_supply_params
      params.fetch(:store_has_supply, {})
    end
end
