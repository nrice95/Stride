# == Schema Information
#
# Table name: athletes
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Athlete < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username);
    return user if user && user.is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def is_password?(pass)
    BCrypt::Password.create(self.password_digest).is_password?(pass)
  end

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.new(pass)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
