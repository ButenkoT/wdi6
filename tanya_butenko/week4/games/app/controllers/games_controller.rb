class GamesController < ApplicationController
	def home
	end

	def games
	end

	def magic_8_ball
	end

	def magic_8_ball_answer
		a = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 'My reply is no', 'My source say no', 'Outlook not so good', 'Very doubtful']
		@answer = a.sample
		@answer
	end

	def secret_number
	end

	def secret_number_result

		@random = Random.rand(1..10)
		@guess = params[:number].to_i
		if @guess == @random
			@result = 'WON'
		else
			@result = "LOST"
		end
		@result
	end

	def rock_paper_scissors
	end

	def rock_paper_scissors_play
		b = {
			'rock' => 0,
			'spock' => 1,
		    'paper' => 2,
		    'lizard' => 3, 
		    'scissors' => 4     
		}

		comp_choice = b.fetch(b.keys.sample)
		@comp = b.key(comp_choice)
		player_choice = params[:throw].to_i
		@player = b.key(player_choice)
		
		calc = (player_choice - comp_choice)%5

		if calc == 1 || calc == 2
	        @winner = 'WON'
	    elsif calc == 3 || calc == 4
	        @winner = 'LOST'
	    else
	        @winner = 'TIE! Try again'
	    end
	    @winner
	end
end