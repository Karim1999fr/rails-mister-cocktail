class CocktailsController < ApplicationController
  before_action :set_cocktail, only: [:show, :search]

  def index
    if params[:query].present?
      sql_query = "title ILIKE :query OR syllabus ILIKE :query"
      @cocktails = Cocktail.where(sql_query, query: "%#{params[:query]}%")
    else
      @cocktails = Cocktail.all
    end
    @cocktails = Cocktail.all
  end

  def show
    @dose = Dose.new
  end

  def new
    @cocktail = Cocktail.new
  end

  def create
    @cocktail = Cocktail.new(cocktail_params)
    if @cocktail.save
      redirect_to cocktail_path(@cocktail)
    else
      render :new
    end
  end

  private

  def cocktail_params
    params.require(:cocktail).permit(:name)
  end

  def set_cocktail
    @cocktail = Cocktail.find(params[:id])
  end
end
