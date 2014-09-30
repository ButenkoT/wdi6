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
		#use choice here so it's possible to do each for creation of radio buttons on page
		@choice = ['rock', 'spock', 'paper', 'lizard', 'scissors']
	end

	def rock_paper_scissors_play

		@choice = ['rock', 'spock', 'paper', 'lizard', 'scissors']

		#randomised choice of computer
		comp_choice = @choice.index(@choice.sample)
		@comp = @choice[comp_choice]

		#choice of player + index in choice array so we can use it in calculation
		@player = params[:throw]
		player_choice = @choice.index(@player)
		
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