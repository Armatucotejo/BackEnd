class ApplicationController < ActionController::Base
<<<<<<< HEAD
     #protect_from_forgery with: :exception

     #before_action :configure_permitted_parameters, if: :devise_controller?

skip_before_action :verify_authenticity_token	

     protected

          def configure_permitted_parameters
               devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:name, :email, :password)}

               devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:name, :email, :password, :current_password)}

	  end

=======
>>>>>>> parent of b79408a... Devise almost implemented
end
