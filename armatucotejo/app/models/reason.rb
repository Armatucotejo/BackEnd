# == Schema Information
#
# Table name: reasons
#
#  id         :integer          not null, primary key
#  name       :string
#  ban_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reason < ApplicationRecord
  belongs_to :ban
end
