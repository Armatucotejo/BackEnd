class SportinterestsController < ApplicationController
  before_action :set_sportinterest, only: [:show, :edit, :update, :destroy]

  # GET /sportinterests
  # GET /sportinterests.json
  def index
    @sportinterests = Sportinterest.all
  end

  # GET /sportinterests/1
  # GET /sportinterests/1.json
  def show
  end

  # GET /sportinterests/new
  def new
    @sportinterest = Sportinterest.new
  end

  # GET /sportinterests/1/edit
  def edit
  end

  # POST /sportinterests
  # POST /sportinterests.json
  def create
    @sportinterest = Sportinterest.new(sportinterest_params)

    respond_to do |format|
      if @sportinterest.save
        format.html { redirect_to @sportinterest, notice: 'Sportinterest was successfully created.' }
        format.json { render :show, status: :created, location: @sportinterest }
      else
        format.html { render :new }
        format.json { render json: @sportinterest.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sportinterests/1
  # PATCH/PUT /sportinterests/1.json
  def update
    respond_to do |format|
      if @sportinterest.update(sportinterest_params)
        format.html { redirect_to @sportinterest, notice: 'Sportinterest was successfully updated.' }
        format.json { render :show, status: :ok, location: @sportinterest }
      else
        format.html { render :edit }
        format.json { render json: @sportinterest.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sportinterests/1
  # DELETE /sportinterests/1.json
  def destroy
    @sportinterest.destroy
    respond_to do |format|
      format.html { redirect_to sportinterests_url, notice: 'Sportinterest was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sportinterest
      @sportinterest = Sportinterest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sportinterest_params
      params.require(:sportinterest).permit(:sport_id, :player_id)
    end
end
