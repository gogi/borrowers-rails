class Friend < ActiveRecord::Base
  validates :first_name, :last_name, :twitter, :email, presence: :true
end
