# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  gender          :string
#  birth_date      :string           not null
#  email           :string           not null
#  location        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null 
#
class User < ApplicationRecord
  # FIGVAPER
  attr_reader :password
  after_initialize :ensure_session_token

  validates :first_name, :last_name, :birth_date, :email, :location, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  # for google maps routes
  has_many :routes,
    class_name: :Route,
    foreign_key: :user_id,
    primary_key: :id
  # for comments
  has_many :comments, 
    class_name: :Comment,
    foreign_key: :author_id,
    primary_key: :id
  # for connections
  has_many :connections, 
    foreign_key: :requester,
    class_name: :Connection,
    primary_key: :id
  # for finding friends through connections
      has_many :friends,
        through: :connections,
        source: :connection

  has_many :connection_requests,
    foreign_key: :requester_id,
    class_name: :ConnectionRequest


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token) # referenced from aA open as a more efficient alternative
      self.session_token = new_session_token
    end
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end


  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def all_the_routes
    routes.all # method using active record to pull all routes
  end

  def all_the_comments
    comments.all
  end

  def all_the_connections
    connections.all
  end

  def all_the_connection_requests
    connection_requests.all
  end

end
