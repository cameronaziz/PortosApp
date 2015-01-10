# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# Create Users

require 'faker'
include Faker

User.destroy_all

password = BCrypt::Password.create('letmein')

me = User.create(
    username: 'cameronaziz',
    first_name: 'Cameron',
    last_name: 'Aziz',
    email: 'cameron.aziz@portosbakery.com',
    password_digest: password,
)
group = Group.find_by_name('Administrators')

me.groups << group

10.times do
  first_name = Name.first_name
  last_name = Name.last_name
  fn = first_name.downcase
  ln = last_name.downcase

  User.create(
    username: "#{fn}#{ln}",
    first_name: first_name,
    last_name: last_name,
    email: Internet.free_email,
    password_digest: password
  )

end

# Create Vendors

#