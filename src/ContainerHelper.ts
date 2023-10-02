import { Container } from "inversify";

/**
 * Inversify Container
 */
export class ContainerHelper {
    /**
     * Bind
     * @param container
     * @param serviceIdentifier
     * @param constructor
     */
    public static bind<T>(container: Container, serviceIdentifier: string, constructor: {
        new (...args: any[]): T;
    }): void {
        container.bind<T>(serviceIdentifier).to(constructor);
    }

    /**
     * ReBind
     * @param container
     * @param serviceIdentifier
     * @param constructor
     */
    public static rebind<T>(container: Container, serviceIdentifier: string, constructor: {
        new (...args: any[]): T;
    }): void {
        container.rebind<T>(serviceIdentifier).to(constructor);
    }

    /**
     * Get Instance
     * @param container
     * @param serviceIdentifier
     * @returns
     */
    public static get<T>(container: Container, serviceIdentifier: string): T {
        return container.get<T>(serviceIdentifier);
    }
}