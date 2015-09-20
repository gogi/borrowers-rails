class FriendsIndexQuery
  attr_reader :params, :scope

  def initialize(scope, params)
    @scope = scope
    @params = params
  end

  def self.find(scope, params)
    self.new(scope, params).find
  end

  def find
    result = scope

    if params[:sortBy]
      order_query = params[:sortBy].underscore

      order_query = 'first_name' if order_query == 'full_name'

      params[:sortAscending] == "true" ? order_query = "#{order_query} ASC" : order_query = "#{order_query} DESC"

      result = result.order(order_query)
    end

    result
  end
end
