class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
    	t.string :title
    	t.string :year
    	t.string :pages
    	t.string :style
    	t.text :image
    	t.timestamps
    end
  end
end
