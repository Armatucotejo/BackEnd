class SportsStoresController < ApplicationController
  before_action :set_sports_store, only: [:show, :edit, :update, :destroy]

  # GET /sports_stores
  # GET /sports_stores.json
  def index
    @sports_stores = SportsStore.all
  end

  # GET /sports_stores/1
  # GET /sports_stores/1.json
  def show
  end

  # GET /sports_stores/new
  def new
    @sports_store = SportsStore.new
  end

  # GET /sports_stores/1/edit
  def edit
  end

  # POST /sports_stores
  # POST /sports_stores.json
  def create
    @sports_store = SportsStore.new(sports_store_params)

    respond_to do |format|
      if @sports_store.save
        format.html { redirect_to @sports_store, notice: 'Sports store was successfully created.' }
        format.json { render :show, status: :created, location: @sports_store }
      else
        format.html { render :new }
        format.json { render json: @sports_store.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sports_stores/1
  # PATCH/PUT /sports_stores/1.json
  def update
    respond_to do |format|
      if @sports_store.update(sports_store_params)
        format.html { redirect_to @sports_store, notice: 'Sports store was successfully updated.' }
        format.json { render :show, status: :ok, location: @sports_store }
      else
        format.html { render :edit }
        format.json { render json: @sports_store.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sports_stores/1
  # DELETE /sports_stores/1.json
  def destroy
    @sports_store.destroy
    respond_to do |format|
      format.html { redirect_to sports_stores_url, notice: 'Sports store was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sports_store
      @sports_store = SportsStore.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sports_store_params
      params.require(:sports_store).permit(:address)
    end
end
