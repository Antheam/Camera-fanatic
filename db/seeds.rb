# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name:'Ant',email:'a@gmail.com',password:'a')
User.create(name:'Johnny',email:'j@gmail.com',password:'a')
User.create(name:'Alex',email:'am@gmail.com',password:'a')



Camera.create(model:'Olympus OM10', description:'Film camera', user_id:1)
Camera.create(model:'Fujifilm X-T3',description:'Great with sports shoot and 4k video', user_id:2)
Camera.create(model:'Nikon D3500',description:"Good camera for beginners", user_id:3)

Album.create(user_id:1, name:'holiday', camera_id:2)
Album.create(user_id:2, name:'greeny day', camera_id:2)
Album.create(user_id:2, name:'Day trip out', camera_id:3)


Photo.create(album_id:1, camera_id:2, image_link:"https://images.unsplash.com/photo-1563560647269-98310f39afb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:1, camera_id:1, image_link:"https://images.unsplash.com/photo-1560438687-83dc89f231e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:3, camera_id:3, image_link:"https://images.unsplash.com/photo-1564298301619-bfc6aa011ad5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:3, camera_id:3, image_link:"https://images.unsplash.com/photo-1563630573747-d1b987fb8e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:3, camera_id:3, image_link:"https://images.unsplash.com/photo-1563210080-dfe35c83e2eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:3, camera_id:3, image_link:"https://images.unsplash.com/photo-1564012948891-27965af38a81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:3, camera_id:3, image_link:"https://images.unsplash.com/photo-1563031137-64f02ebdf9cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:1, camera_id:1, image_link:"https://images.unsplash.com/photo-1561181444-2e1afcf39afb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:1, camera_id:1, image_link:"https://images.unsplash.com/photo-1560698572-b6bd4282dda6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:1, camera_id:1, image_link:"https://images.unsplash.com/photo-1556987090-a9664c00f871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:1, camera_id:1, image_link:"https://images.unsplash.com/photo-1560255760-8f1ecf845de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:1, camera_id:2, image_link:"https://images.unsplash.com/photo-1563560647269-98310f39afb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")
Photo.create(album_id:1, camera_id:2, image_link:"https://images.unsplash.com/photo-1559251484-c9dbf9982ed5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60")


Comment.create(camera_id:2, user_id:1, rating:4.5, content:'High quality pics, great for shooting outdoors')
Comment.create(camera_id:1, user_id:2, rating:4.5, content:'Camera has nice focal lenghts')
Comment.create(camera_id:3, user_id:3, rating:4.9, content:'Colours are vibrant')
Comment.create(camera_id:1, user_id:3, rating:3.8, content:'Shoots better in colour than black/white')
Comment.create(camera_id:1, user_id:2, rating:4.7, content:'Great fo shooting outdoors')
Comment.create(camera_id:1, user_id:1, rating:3.9, content:'Great for shooting in portraiture')
