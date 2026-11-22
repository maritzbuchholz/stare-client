import { Component, ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ErrorBoundaryProps = {
    children: ReactNode;
    resetKey: string;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

// Catches errors thrown while rendering and redirects to the /error route.
// Resets when resetKey (the current pathname) changes so navigation recovers.
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: unknown) {
        console.error("Render error", error);
    }

    componentDidUpdate(prevProps: ErrorBoundaryProps) {
        if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
            this.setState({ hasError: false });
        }
    }

    render() {
        if (this.state.hasError) {
            return <Navigate to="/error" replace />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
