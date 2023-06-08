require 'faker'
puts "🌱 Seeding spices..."

# seeds.rb


# Clear existing data
Category.destroy_all
Todo.destroy_all

# Generate categories
5.times do
  Category.create(name: Faker::Lorem.word)
end

# Generate todos
10.times do
  category = Category.all.sample
  Todo.create(
    title: Faker::Lorem.sentence,
    description: Faker::Lorem.paragraph,
    category: category
  )
end


puts "✅ Done seeding!"
