import { CreateSiteUseCaseImpl, CREATE_SITE_USE_CASE } from './create-site.use-case';
import { SiteService } from '../services/site.service';
import { ApplicationContext } from '../../../_shared';
import { ValidationError, AlreadyExistsError, InfrastructureError } from '../../../_shared';
import { of, throwError } from 'rxjs';

describe('CreateSiteUseCase', () => {
    let useCase: CreateSiteUseCaseImpl;
    let mockSiteService: any;
    let mockContext: any;

    beforeEach(() => {
        // Create mock site service
        mockSiteService = {
            checkCodeAvailability: jasmine.createSpy('checkCodeAvailability'),
            createSite: jasmine.createSpy('createSite')
        };

        // Create mock application context
        mockContext = {
            getSocieteId: jasmine.createSpy('getSocieteId').and.returnValue(1),
            getSocieteNom: jasmine.createSpy('getSocieteNom').and.returnValue('Test Company'),
            getUserId: jasmine.createSpy('getUserId').and.returnValue(1),
            getUserName: jasmine.createSpy('getUserName').and.returnValue('testuser'),
            getSiteId: jasmine.createSpy('getSiteId').and.returnValue(null),
            getDepartementId: jasmine.createSpy('getDepartementId').and.returnValue(null),
            getUser: jasmine.createSpy('getUser').and.returnValue(null),
            isAuthenticated: jasmine.createSpy('isAuthenticated').and.returnValue(true)
        };

        useCase = new CreateSiteUseCaseImpl(mockSiteService, mockContext);
    });

    describe('execute', () => {
        it('should create site successfully', async () => {
            // Arrange
            const dto = {
                nom: 'Site Test',
                code: 'ST001',
                type: 'SIEGE' as const,
                ville: 'Test City',
                pays: 'Test Country',
                societeId: 1,
                actif: true
            };

            const expectedSite = {
                id: 1,
                nom: 'Site Test',
                code: 'ST001',
                type: 'SIEGE' as const,
                ville: 'Test City',
                pays: 'Test Country',
                societeId: 1,
                societeNom: 'Test Company',
                actif: true,
                dateCreation: '2024-01-01T00:00:00Z'
            };

            mockSiteService.checkCodeAvailability.and.returnValue(of(true));
            mockSiteService.createSite.and.returnValue(of(expectedSite));

            // Act
            const result = await useCase.execute(dto);

            // Assert
            expect(result.isSuccess).toBe(true);
            expect(mockSiteService.checkCodeAvailability).toHaveBeenCalledWith('ST001', 1);
            expect(mockSiteService.createSite).toHaveBeenCalledWith(dto);
        });

        it('should fail when nom is empty', async () => {
            // Arrange
            const dto = {
                nom: '',
                code: 'ST001',
                type: 'SIEGE'
            };

            // Act
            const result = await useCase.execute(dto as any);

            // Assert
            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(ValidationError);
            expect(result.error.message).toContain('nom');
            expect(mockSiteService.createSite).not.toHaveBeenCalled();
        });

        it('should fail when code is empty', async () => {
            // Arrange
            const dto = {
                nom: 'Site Test',
                code: '',
                type: 'SIEGE'
            };

            // Act
            const result = await useCase.execute(dto as any);

            // Assert
            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(ValidationError);
            expect(result.error.message).toContain('code');
            expect(mockSiteService.createSite).not.toHaveBeenCalled();
        });

        it('should fail when societeId is not in context', async () => {
            // Arrange
            mockContext.getSocieteId.and.returnValue(0);
            const dto = {
                nom: 'Site Test',
                code: 'ST001',
                type: 'SIEGE'
            };

            // Act
            const result = await useCase.execute(dto as any);

            // Assert
            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(ValidationError);
            expect(result.error.message).toContain('Société');
            expect(mockSiteService.createSite).not.toHaveBeenCalled();
        });

        it('should fail when code already exists', async () => {
            // Arrange
            const dto = {
                nom: 'Site Test',
                code: 'ST001',
                type: 'SIEGE'
            };

            mockSiteService.checkCodeAvailability.and.returnValue(of(false));

            // Act
            const result = await useCase.execute(dto as any);

            // Assert
            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(AlreadyExistsError);
            expect(result.error.message).toContain('ST001');
            expect(mockSiteService.createSite).not.toHaveBeenCalled();
        });

        it('should handle service errors', async () => {
            // Arrange
            const dto = {
                nom: 'Site Test',
                code: 'ST001',
                type: 'SIEGE'
            };

            mockSiteService.checkCodeAvailability.and.returnValue(of(true));
            mockSiteService.createSite.and.returnValue(
                throwError(() => new Error('Database error'))
            );

            // Act
            const result = await useCase.execute(dto as any);

            // Assert
            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(InfrastructureError);
        });

        it('should handle null response from service', async () => {
            // Arrange
            const dto = {
                nom: 'Site Test',
                code: 'ST001',
                type: 'SIEGE'
            };

            mockSiteService.checkCodeAvailability.and.returnValue(of(true));
            mockSiteService.createSite.and.returnValue(of(null));

            // Act
            const result = await useCase.execute(dto as any);

            // Assert
            expect(result.isFailure).toBe(true);
            expect(result.error).toBeInstanceOf(InfrastructureError);
        });
    });
});
