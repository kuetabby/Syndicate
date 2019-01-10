describe('home page', function(){
	beforeEach('successfully', function(){
		cy.visit('/')
	})

	it('penyewaan', function(){
		cy.contains('h1', 'Penyewaan Lapangan Badminton')
	})

	it('input', function(){
		cy.get('input')
		.type('jakarta pusat')
		.should('have.value', 'jakarta pusat')
	})

	it('input', function(){
		cy.get('input')
		.type('jakarta barat')
		.should('have.value', 'jakarta barat')
	})
})