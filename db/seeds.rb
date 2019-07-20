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


Photo.create(album_id:1, camera_id:2, image_link:"https://live.staticflickr.com/8390/8572035019_0577667f3d_n.jpg")
Photo.create(album_id:1, camera_id:1, image_link:"https://live.staticflickr.com/5582/15049353751_d69ac63ce5_n.jpg")
Photo.create(album_id:3, camera_id:3, image_link:"https://live.staticflickr.com/5338/8943869261_b32d628f2e_c.jpg")
Photo.create(album_id:3, camera_id:3, image_link:"https://farm3.staticflickr.com/2883/buddyicons/54196590@N04_l.jpg?1375647668")
Photo.create(album_id:3, camera_id:3, image_link:"https://live.staticflickr.com/6119/6301728860_9cb3db079e_n.jpg")
Photo.create(album_id:3, camera_id:3, image_link:"https://live.staticflickr.com/5338/8943869261_b32d628f2e_c.jpg")
Photo.create(album_id:3, camera_id:3, image_link:"https://live.staticflickr.com/8029/7945490270_55d6c0924c_t.jpg")


Comment.create(camera_id:2, user_id:1, rating:4.5, content:'High quality pics, great for shooting outdoors')
Comment.create(camera_id:1, user_id:2, rating:4.5, content:'Camera has nice focal lenghts')
Comment.create(camera_id:3, user_id:3, rating:4.9, content:'Colours are vibrant')
Comment.create(camera_id:1, user_id:3, rating:3.8, content:'Shoots better in colour than black/white')
Comment.create(camera_id:1, user_id:2, rating:4.7, content:'Great fo shooting outdoors')
Comment.create(camera_id:1, user_id:1, rating:3.9, content:'Great for shooting in portraiture')
