class Roller
  def initialize
    @dice = 5.times.map { rand(1..6) }
    @fifth_dice = @dice.uniq.sort
  end

  def roll
    output = @fifth_dice.each_with_object({}) do |die, hash|
      selection = @dice.dup
      selection.slice!(selection.index(die))
      selection.sort!
      hash[die] = permutations(selection)
    end
    output['roll'] = @dice
    output
  end

  def self.roll
    new.roll
  end

  private

  def permutations(values)
    orders = %w(0123 0213 0312 1203 1302)
    orders.each_with_object([]) do |order, arr|
      order = order.split('').map(&:to_i)
      new_perm = [[values[order[0]], values[order[1]]], [values[order[2]], values[order[3]]]]
      arr << new_perm unless arr.include?(new_perm.reverse)
    end.uniq
  end

end
