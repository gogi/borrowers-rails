class Friend < ActiveRecord::Base
  has_many :articles
  validates :first_name, :last_name, :twitter, :email, presence: :true
end
