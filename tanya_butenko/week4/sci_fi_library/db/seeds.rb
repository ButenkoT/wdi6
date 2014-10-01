
Author.destroy_all
Book.destroy_all
 
Author.create(:name => 'Isaac Asimov', :nationality => 'American', :dob => '2.01.1920', :period => '20th century', :image => 'http://2.bp.blogspot.com/-8rtSlxGZfaI/TwG9f3tpfnI/AAAAAAAADdA/k6E0dJ1BtCc/s1600/Isaac+Asimov2.jpg')
 
Book.create(:title => 'I, Robot', :year => '1950', :pages => '253 pp', :style => 'Science Fiction', :image => 'http://upload.wikimedia.org/wikipedia/en/8/8e/I_Robot_-_Runaround.jpg')
