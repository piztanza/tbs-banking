import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);
        }

        getLinkToken();
    }, []);
    
    const onSuccess = useCallback(async () => {

    }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }
  
    return (
    <>
        {variant === 'primary' ? (
            <Button

                className="plaidlink-primary"
            >
                Connect bank
            </Button>
        ): variant === 'ghost' ? (
            <Button>
                Connect bank
            </Button>
        ): (
            <Button>
                Connect bank
            </Button>
        )}
    </>
  )
}

export default PlaidLink