#get current_user info, avatar, posts
json.currentUser do
   json.extract! current_user, :id, :username
   
   # debugger
   # if current_user.avatar.attached?
   #    json.avatar url_for(current_user.avatar) 
   # end

   json.posts do
      json.array! current_user.posts.collect { |post| post.id }
   end
end
   
#all posts' info(details and medias)
json.posts do
   @posts.each do |post|
      json.set! post.id do
         json.extract! post, :id, :content, :title, :body, :author_id
         #after retrieveing post info, medias if avail.
         json.medias do
            json.array! post.medias do |media|
               json.url url_for(media)
            end
         end
         #add likes next
      end
   end
end

#get author/user of each post
json.users do
   @posts.each do |post|
      json.set! post.user.id do
         json.partial! 'api/users/user', user: post.user
      end
   end
end

#add likes