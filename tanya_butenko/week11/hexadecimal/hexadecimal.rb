class Hexadecimal

  attr_accessor :number

  def initialize(number)
    @number = number 
  end

  def to_decimal()
    symbols = @number.split('').reverse

    result = 0;
    symbols.each_index  do |ind|

      intval = symbols[ind].to_i(16)
      p intval
      if intval < 16
        result = result + intval * 16 ** ind;
      else
        result = 0
      end

    end

      result
    
    # convert_base(16, 10)
  end

  # def convert_base(from, to)
  #   @number.to_i(from).to_s(to)
  # end

end

p Hexadecimal.new('carrot').to_decimal;