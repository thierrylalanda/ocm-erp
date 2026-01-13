import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use Cases
import { AuthenticateUserUseCase } from './application/use-cases/authenticate-user.use-case';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        // Use Cases are already provided in root via @Injectable({providedIn: 'root'})
        // No need to provide them here again
    ],
    exports: [
        // Export types and classes that other modules might need
    ]
})
export class SharedModule { }

// Note: In a real implementation, we would provide actual repository implementations here
// For now, we'll rely on the abstract interfaces and provide implementations
// in the infrastructure layer when needed
