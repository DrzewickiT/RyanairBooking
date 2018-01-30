Feature: Flight booking payment
    As a logged-in user
    I want to be able to book a flight
    So that I can pay for my ticket

    @BookingScenario
    Scenario: Ticket payment refused because of invalid card number

    Given I am on homepage
        And I am logged-in

    When I set one way flight
        And I set departure from Dub and destination Sxf
        And I choose day 11 month 03 year 2018
        And I set passengers as 2 adults, 0 teens, 1 children and 0 infants
        And I click accept terms
        And I click proceed button

    Then I see list of possible flights

    When I click the first one
        And I set standard fare 
        And I click continue button

    Then I can see seat selection panel

    When I select 3 seats
        And I click next button
        And I click confirm button
    
    Then I see priority dialog

    When I close priority dialog

    Then I can see check out option

    When I click check out button

    Then I see check out form

    When I type details for 2 adults  
        And I type details for 1 children
