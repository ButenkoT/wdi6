class Hexadecimal

  attr_accessor :number

  def initialize(number)
    @number = number 
  end

  def to_decimal()
    unless @number =~ /^[0-9A-F]+$/i
      return result = 0
    end

    symbols = @number.split('').reverse
      
    result = 0;
    symbols.each_index  do |ind|
     
      intval = symbols[ind].to_i(16)

      result = result + intval * 16 ** ind;
    end

    result
    # convert_base(16, 10)
  end

  # def convert_base(from, to)
  #   @number.to_i(from).to_s(to)
  # end

end

p Hexadecimal.new('100').to_decimal;