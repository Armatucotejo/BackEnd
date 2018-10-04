# == Schema Information
#
# Table name: bans
#
#  id         :integer          not null, primary key
#  log        :string
#  starttime  :datetime
#  endtime    :datetime
#  user_id    :integer
#  admin_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ban < ApplicationRecord
  has_one :reason
  belongs_to :user
  belongs_to :admin

end
