class DieRoles

  def initialize(session)
    @session = session
  end

  def roles
    @session[:roles] ||= []
  end

  def roll!
    roles << rand(6)
  end

end
