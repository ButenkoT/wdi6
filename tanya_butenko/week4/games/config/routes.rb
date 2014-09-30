Rails.application.routes.draw do
  root :to => 'games#home'

  get 'games/' => 'games#games'
  get 'games/magic_8_ball' => 'games#magic_8_ball'
  get 'games/magic_8_ball/answer' => 'games#magic_8_ball_answer'

  get '/games/secret_number' => 'games#secret_number'
  get '/games/secret_number/result' => 'games#secret_number_result'

  get '/games/rock_paper_scissors' => 'games#rock_paper_scissors'
  get '/games/rock_paper_scissors/play' => 'games#rock_paper_scissors_play'
end
