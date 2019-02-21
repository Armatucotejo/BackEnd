class SportInterestsController < ApplicationController
  before_action :set_sport_interest, only: [:show, :edit, :update, :destroy]

  # GET /sport_interests
  # GET /sport_interests.json
  def index
    @sport_interests = SportInterest.paginate(page: params[:page], per_page:5)
  end

  # GET /sport_interests/1
  # GET /sport_interests/1.json
  def show
  end

  # GET /sport_interests/new
  def new
    @sport_interest = SportInterest.new
  end

  # GET /sport_interests/1/edit
  def edit
  end

  # POST /sport_interests
  # POST /sport_interests.json
  def create
    @sport_interest = SportInterest.new(sport_interest_params)

    respond_to do |format|
      if @sport_interest.save
        format.html { redirect_to @sport_interest, notice: 'Sport interest was successfully created.' }
        format.json { render :show, status: :created, location: @sport_interest }
      else
        format.html { render :new }
        format.json { render json: @sport_interest.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /sport_interests/1
  # PATCH/PUT /sport_interests/1.json
  def update
    respond_to do |format|
      if @sport_interest.update(sport_interest_params)
        format.html { redirect_to @sport_interest, notice: 'Sport interest was successfully updated.' }
        format.json { render :show, status: :ok, location: @sport_interest }
      else
        format.html { render :edit }
        format.json { render json: @sport_interest.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sport_interests/1
  # DELETE /sport_interests/1.json
  def destroy
    @sport_interest.destroy
    respond_to do |format|
      format.html { redirect_to sport_interests_url, notice: 'Sport interest was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sport_interest
      @sport_interest = SportInterest.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sport_interest_params
      params.fetch(:sport_interest, {})
    end
end
