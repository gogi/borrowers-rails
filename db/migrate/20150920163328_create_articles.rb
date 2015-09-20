class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :description
      t.string :state, default: :borrowed
      t.belongs_to :friend

      t.timestamps null: false
    end
  end
end
