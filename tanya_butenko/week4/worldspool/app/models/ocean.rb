# == Schema Information
#
# Table name: oceans
#
#  id      :integer          not null, primary key
#  name    :string(255)
#  image   :text
#  islands :float
#  volume  :float
#  area    :float
#


class Ocean < ActiveRecord::Base
	
end
