class User < ActiveRecord::Base
  before_save {self.email = email.downcase}
  validates :first_name, presence: true, length: {maximum: 50}
  validates :last_name, presence: true, length: {maximum: 50}
  validates :email, presence: true, length: {maximum: 255}, #todo: add email validation
            uniqueness: {case_sensitive: false}
  has_secure_password
  validates :password, length: {minimum: 6}

  def full_name
    [first_name, last_name].join(' ')
  end

  end