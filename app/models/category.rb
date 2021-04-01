class Category < ApplicationRecord
  validates :name, length: { maximum: 10}
end
