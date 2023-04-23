// Make sure the document is loaded and ready to go.
document
    .addEventListener('DOMContentLoaded', () => {

        document
            .getElementById('toggle-status-high-btn')
            .addEventListener('click', () => {
                document
                    .getElementById('status-bar-1')
                    .classList
                    .toggle('high')
            })

            document
            .getElementById('status-bar-2')
            .addEventListener('click', () => {
                document
                    .getElementById('status-bar-2')
                    .classList
                    .toggle('low')
            })

            document
            .getElementById('status-bar-3')
            .addEventListener('click', () => {
                document
                    .getElementById('status-bar-3')
                    .classList
                    .toggle('changing')
            })
            
            document
            .getElementById('status-bar-4')
            .addEventListener('click', () => {
                document
                    .getElementById('status-bar-4')
                    .classList
                    .toggle('disabled')
            })

        document
            .getElementById('cycle-status-states-btn')
            .addEventListener('click', () => {
                const statusBar = document
                    .getElementById('status-bar-5')
                const cycleClasses = statusBar.dataset.cycleclasses.split(',')
                const currentClass = statusBar.dataset.currentclass 
                const position = cycleClasses.indexOf(currentClass)
                const nextClass = cycleClasses[position + 1] || cycleClasses[0]
                statusBar.dataset.currentclass = nextClass
                statusBar.classList.remove(currentClass)
                statusBar.classList.add(nextClass)
            })

    })