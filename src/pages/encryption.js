import React from "react";
import encImg from "../images/enc_right.jpg"
import '../css/encryption.css'

const Encryption = () => {
    const sampleRequest =  `
    {
        "GetEligibilityCheckRequest :" {
            "SubHeader": {
                "requestUUID": <span class="text-color-primary">AL1231-17092021</span>",
                "serviceRequestId": "<span class="text-color-primary">hafdvd</span>",
                "serviceRequestVersion": "<span class="text-color-primary">1.0</span>",
                "channelId": "<span class="text-color-primary">TBD</span>"
            },
            "GetEligibilityCheckRequestBody": {
                "mobileNumber": "<span class="text-color-primary">98765*****</span>"
            }
        }
    }
`
    const encryptedRequest=`
    {
        "GetEligibilityCheckRequest": {
            "SubHeader": {
                "requestUUID": "<span class="text-color-primary">AL1231-17092021</span>",
                "serviceRequestId": "<span class="text-color-primary">hafdvd</span>",
                "serviceRequestVersion": "<span class="text-color-primary">1.0</span>",
                "channelId": "<span class="text-color-primary">TBD</span>"
            },
            "GetEligibilityCheckRequestBodyEncrypted": "<span class="text-color-primary">MFictTWmaV5A+QVV+Wzqe8qF9LGRvaXkQDMb1ZJgeSh4EhSCPQ3BXdR35Kfzlfp9PyTs0+cNNnMBevRn3d9RLLZ5p2DQNh2xc9gxTGc/1bph6MZFvSH1Af7tZMERiyiS</span>"
        }
    }
    `
    const sampleResponse=`
    {
        "GetEligibilityCheckResponse": {
            "SubHeader": {
                "requestUUID": "<span class="text-color-primary">AL1231-17092021</span>",
                "serviceRequestId": "<span class="text-color-primary">hafdvd</span>",
                "serviceRequestVersion": "<span class="text-color-primary">1.0</span>",
                "channelId": "<span class="text-color-primary">TBD</span>"
            },
            "GetEligibilityCheckResponseBody": {
                "LOAN_AMOUNT": <span class="text-color-primary">2500000</span>,
                "INTEREST_RATE": "<span class="text-color-primary">9.25,9,8.85,8.85,8.75</span>",
                "TENOR": <span class="text-color-primary">84</span>,
                "LTV": "<span class="text-color-primary">100% on Road</span>",
                "PROCESSING_FEE": "<span class="text-color-primary">3500,4500,5500,6500,7000</span>",
                "STP_FLAG": <span class="text-color-primary">1</span>,
                "EXTRA_6": "<span class="text-color-primary">null</span>",
                "EXTRA_7": "<span class="text-color-primary">null</span>",
                "EXTRA_8": "<span class="text-color-primary">null</span>"
            }
        }
    }
    `
    const encryptedResponse=`
    {
        "GetEligibilityCheckResponse": {
            "SubHeader": {
                "requestUUID": "<span class="text-color-primary">AL1231-17092021</span>",
                "serviceRequestId": "<span class="text-color-primary">hafdvd</span>",
                "serviceRequestVersion": "<span class="text-color-primary">1.0</span>",
                "channelId": "<span class="text-color-primary">TBD</span>"
            },
            "GetEligibilityCheckResponseBodyEncrypted": "<span class="text-color-primary">7Z37GZ0Or32nvct/3MJbmU384sCMCpWCmfFz3UyKDXSoCQDZBr9v3x5Vn00cAemnUBQkC5t6imJIhCt5AY2AVoJV0N/J3Bdw+laALnGtTPbhT+xG1mGI689A1pntqx1NerleCjfKKvxZqtJ1JoKpTGcDyS/I8XwIMsN8TajHS9T3ug3cJ3In6EZA9IFuAv+R35FM2kczFrjBN4kUhSmF9XehUbGa8uk6TLTQT6HXlfzbLHF8tqw976L5q0UdmNhbHn1DmSQmEAxMOvn+TbSUSA2K02DEP70Fif2Ozk4d7M0=</span>"
        }
    }
    `
    const java=`
    import java.io.ByteArrayOutputStream;
    import java.io.UnsupportedEncodingException;
    import java.security.InvalidAlgorithmParameterException;
    import java.security.InvalidKeyException;
    import java.security.NoSuchAlgorithmException;
    import java.security.spec.AlgorithmParameterSpec;
    import java.util.Arrays;
    
    import javax.crypto.BadPaddingException;
    import javax.crypto.Cipher;
    import javax.crypto.IllegalBlockSizeException;
    import javax.crypto.NoSuchPaddingException;
    import javax.crypto.spec.IvParameterSpec;
    import javax.crypto.spec.SecretKeySpec;
    import java.util.Base64;
    
    public class AESEncDec {
        
        public static String encryptCallBack(String key, String str_resp)
        {
                    
                ByteArrayOutputStream baos = new ByteArrayOutputStream(key.length() / 2);
                    
                for (int i = 0; i < key.length(); i += 2) {
                    String output = key.substring(i, i + 2);	       
                    int decimal = Integer.parseInt(output, 16);	        
                    baos.write(decimal);
                }
                    
                    
                try {
                    SecretKeySpec skeySpec = new SecretKeySpec(baos.toByteArray(), "AES");
                        
                    byte [] iv1 = new byte [] {(byte) 0x8E, 0x12, 0x39, (byte) 0x9C, 0x07, 0x72, 0x6F, 0x5A, (byte) 0x8E, 0x12, 0x39, (byte) 0x9C, 0x07,0x72, 0x6F, 0x5A};
                    AlgorithmParameterSpec paramSpec = new IvParameterSpec(iv1);
    
                    Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
                    cipher.init(1, skeySpec,paramSpec);
                        
    
                    byte[] encrypted = cipher.doFinal(str_resp.getBytes("UTF-8"));
                    
                    ByteArrayOutputStream os = new ByteArrayOutputStream();
                    os.write(iv1);
                    os.write(encrypted);
                    byte[] encryptedWithIV = os.toByteArray();
                    
                    //return new String(Base64.encode(os.toByteArray()));
                    String encryptedResult = Base64.getEncoder().encodeToString(encryptedWithIV);
                    return encryptedResult;
                } 
                catch (Exception ex) 
                {
                    ex.printStackTrace();
                }
    
                return null;
        }
                
        public static String decryptCallBack(String key, String encrypted)
        {
                    
                ByteArrayOutputStream baos = new ByteArrayOutputStream(key.length() / 2);
                        
                for (int i = 0; i < key.length(); i += 2) 
                {
                    String output = key.substring(i, i + 2);	       
                    int decimal = Integer.parseInt(output, 16);	        
                    baos.write(decimal);
                }
                        
                try
                {
                    SecretKeySpec skeySpec = new SecretKeySpec(baos.toByteArray(), "AES");
                    
                    //byte[] encryptedIVandTextAsBytes = Base64.decode(encrypted);
                    byte[] encryptedIVandTextAsBytes = Base64.getDecoder().decode(encrypted);
                    byte[] iv = Arrays.copyOf(encryptedIVandTextAsBytes, 16);
                    byte[] ciphertextByte = Arrays.copyOfRange(encryptedIVandTextAsBytes, 16, encryptedIVandTextAsBytes.length);
                    
                    
                    Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
                    cipher.init(2, skeySpec, new IvParameterSpec(iv));
                    byte[] decryptedTextBytes = cipher.doFinal(ciphertextByte);	
                    
                    String original = new String(decryptedTextBytes, "UTF-8");
    
                    return original;
                }
                catch (Exception ex) 
                {
                        ex.printStackTrace();
                }
    
                return null;
        }
        
        public static void main(String args[]) {
            
            AESEncDec m = new AESEncDec();
            
            final String keyAsHexString = "46C1EB633ECAB0CA0F52*****E92EA72";
            String plainText = "{ "mobileNumber": "483249c1d0e10d0762ff0ec55365a0f79e*****2f1f1ab08f2b2c2a70b7aaa3b" }";
            
            String encrptedString = m.encryptCallBack(keyAsHexString,plainText);
            
            System.out.println("Encrypted data = " + encrptedString);
            
            String decrypt = m.decryptCallBack(keyAsHexString,encrptedString);
            System.out.println("Decrypted data = " + decrypt);
            
        }
    }
    `
  return (
    <div class="encryption">
        <div class="container">
            <section class="encryption__banner">
                <div class="encryption__info">
                    <h4 class="encryption__info-title">
                        Encryption
                    </h4>
                    <p class="encryption__info-desc">
                        Sandbox request is in plain format. For UAT and production request response data needs to be
                        transmitted in encrypted format only.
                    </p>
                    <p class="encryption__info-desc">
                        To pass encrypted request data, use AES 128-AES/CBC/PKCS5Padding with : secret key shared by ESB
                        and encode data with base64 encoding. This is part of encrypt function.
                    </p>
                </div>
                <div class="encryption__banner-img">
                    <img src={encImg} alt="enc_right" />
                </div>
            </section>
            <section class="encryption__request">
                <h6 class="encryption__request-title">
                    Example:
                </h6>
                <div class="encryption__code">
                    <div class="encryption__code-header">
                        <h6 class="encryption__code-title">
                            Sample Request
                        </h6>
                        <a href="/" class="encryption__code-copy">
                            <svg width="16" height="16" viewBox="0 0 28 28" fill="none" stroke="#97144d"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.9 17.9C3.68855 17.9 3.08283 17.9 2.60502 17.7021C1.96795 17.4382 1.4618 16.932 1.19791 16.295C1 15.8172 1 15.2114 1 14V5.16C1 3.70386 1 2.9758 1.28338 2.41962C1.53265 1.9304 1.9304 1.53265 2.41962 1.28338C2.9758 1 3.70386 1 5.16 1H14C15.2114 1 15.8172 1 16.295 1.19791C16.932 1.4618 17.4382 1.96795 17.7021 2.60502C17.9 3.08283 17.9 3.68855 17.9 4.9M14.26 27H22.84C24.2961 27 25.0242 27 25.5804 26.7166C26.0696 26.4673 26.4673 26.0696 26.7166 25.5804C27 25.0242 27 24.2961 27 22.84V14.26C27 12.8039 27 12.0758 26.7166 11.5196C26.4673 11.0304 26.0696 10.6327 25.5804 10.3834C25.0242 10.1 24.2961 10.1 22.84 10.1H14.26C12.8039 10.1 12.0758 10.1 11.5196 10.3834C11.0304 10.6327 10.6327 11.0304 10.3834 11.5196C10.1 12.0758 10.1 12.8039 10.1 14.26V22.84C10.1 24.2961 10.1 25.0242 10.3834 25.5804C10.6327 26.0696 11.0304 26.4673 11.5196 26.7166C12.0758 27 12.8039 27 14.26 27Z"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            Copy me
                        </a>
                    </div>
                    <div class="encryption__code-body">
                        <pre dangerouslySetInnerHTML={{__html: sampleRequest}}></pre>
                    </div>
                </div>
                <p class="encryption__code-note">
                    Note: Plain Text request highlighted in BOLD need to be encrypted in AES128 algorithm and send in
                    "GetEligibilityCheckRequestBodyEncrypted" tag.
                </p>
            </section>
            <section class="encryption__request">
                <h6 class="encryption__request-title">
                    Encrypted Request:
                </h6>
                <div class="encryption__code">
                    <div class="encryption__code-header">
                        <h6 class="encryption__code-title">
                            Encrypted Request:
                        </h6>
                        <a href="/" class="encryption__code-copy">
                            <svg width="16" height="16" viewBox="0 0 28 28" fill="none" stroke="#97144d"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.9 17.9C3.68855 17.9 3.08283 17.9 2.60502 17.7021C1.96795 17.4382 1.4618 16.932 1.19791 16.295C1 15.8172 1 15.2114 1 14V5.16C1 3.70386 1 2.9758 1.28338 2.41962C1.53265 1.9304 1.9304 1.53265 2.41962 1.28338C2.9758 1 3.70386 1 5.16 1H14C15.2114 1 15.8172 1 16.295 1.19791C16.932 1.4618 17.4382 1.96795 17.7021 2.60502C17.9 3.08283 17.9 3.68855 17.9 4.9M14.26 27H22.84C24.2961 27 25.0242 27 25.5804 26.7166C26.0696 26.4673 26.4673 26.0696 26.7166 25.5804C27 25.0242 27 24.2961 27 22.84V14.26C27 12.8039 27 12.0758 26.7166 11.5196C26.4673 11.0304 26.0696 10.6327 25.5804 10.3834C25.0242 10.1 24.2961 10.1 22.84 10.1H14.26C12.8039 10.1 12.0758 10.1 11.5196 10.3834C11.0304 10.6327 10.6327 11.0304 10.3834 11.5196C10.1 12.0758 10.1 12.8039 10.1 14.26V22.84C10.1 24.2961 10.1 25.0242 10.3834 25.5804C10.6327 26.0696 11.0304 26.4673 11.5196 26.7166C12.0758 27 12.8039 27 14.26 27Z"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            Copy me
                        </a>
                    </div>
                    <div class="encryption__code-body">
                        <pre dangerouslySetInnerHTML={{__html: encryptedRequest}}></pre>
                    </div>
                </div>
                <p class="encryption__code-note">
                    To decrypt response data, decode data with base64 decoding and use same AES 128 -
                    AES/CBC/PKCS5Padding with secret key shared by ESB.
                </p>
            </section>
            <section class="encryption__request">
                <h6 class="encryption__request-title">
                    Example:
                </h6>
                <div class="encryption__code">
                    <div class="encryption__code-header">
                        <h6 class="encryption__code-title">
                            Sample response:
                        </h6>
                        <a href="/" class="encryption__code-copy">
                            <svg width="16" height="16" viewBox="0 0 28 28" fill="none" stroke="#97144d"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.9 17.9C3.68855 17.9 3.08283 17.9 2.60502 17.7021C1.96795 17.4382 1.4618 16.932 1.19791 16.295C1 15.8172 1 15.2114 1 14V5.16C1 3.70386 1 2.9758 1.28338 2.41962C1.53265 1.9304 1.9304 1.53265 2.41962 1.28338C2.9758 1 3.70386 1 5.16 1H14C15.2114 1 15.8172 1 16.295 1.19791C16.932 1.4618 17.4382 1.96795 17.7021 2.60502C17.9 3.08283 17.9 3.68855 17.9 4.9M14.26 27H22.84C24.2961 27 25.0242 27 25.5804 26.7166C26.0696 26.4673 26.4673 26.0696 26.7166 25.5804C27 25.0242 27 24.2961 27 22.84V14.26C27 12.8039 27 12.0758 26.7166 11.5196C26.4673 11.0304 26.0696 10.6327 25.5804 10.3834C25.0242 10.1 24.2961 10.1 22.84 10.1H14.26C12.8039 10.1 12.0758 10.1 11.5196 10.3834C11.0304 10.6327 10.6327 11.0304 10.3834 11.5196C10.1 12.0758 10.1 12.8039 10.1 14.26V22.84C10.1 24.2961 10.1 25.0242 10.3834 25.5804C10.6327 26.0696 11.0304 26.4673 11.5196 26.7166C12.0758 27 12.8039 27 14.26 27Z"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            Copy me
                        </a>
                    </div>
                    <div class="encryption__code-body">
                        <pre dangerouslySetInnerHTML={{__html: sampleResponse}}></pre>
                    </div>
                </div>
            </section>
            <section class="encryption__request">
                <div class="encryption__code">
                    <div class="encryption__code-header">
                        <h6 class="encryption__code-title">
                            Encrypted response:
                        </h6>
                        <a href="/" class="encryption__code-copy">
                            <svg width="16" height="16" viewBox="0 0 28 28" fill="none" stroke="#97144d"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.9 17.9C3.68855 17.9 3.08283 17.9 2.60502 17.7021C1.96795 17.4382 1.4618 16.932 1.19791 16.295C1 15.8172 1 15.2114 1 14V5.16C1 3.70386 1 2.9758 1.28338 2.41962C1.53265 1.9304 1.9304 1.53265 2.41962 1.28338C2.9758 1 3.70386 1 5.16 1H14C15.2114 1 15.8172 1 16.295 1.19791C16.932 1.4618 17.4382 1.96795 17.7021 2.60502C17.9 3.08283 17.9 3.68855 17.9 4.9M14.26 27H22.84C24.2961 27 25.0242 27 25.5804 26.7166C26.0696 26.4673 26.4673 26.0696 26.7166 25.5804C27 25.0242 27 24.2961 27 22.84V14.26C27 12.8039 27 12.0758 26.7166 11.5196C26.4673 11.0304 26.0696 10.6327 25.5804 10.3834C25.0242 10.1 24.2961 10.1 22.84 10.1H14.26C12.8039 10.1 12.0758 10.1 11.5196 10.3834C11.0304 10.6327 10.6327 11.0304 10.3834 11.5196C10.1 12.0758 10.1 12.8039 10.1 14.26V22.84C10.1 24.2961 10.1 25.0242 10.3834 25.5804C10.6327 26.0696 11.0304 26.4673 11.5196 26.7166C12.0758 27 12.8039 27 14.26 27Z"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            Copy me
                        </a>
                    </div>
                    <div class="encryption__code-body">
                        <pre dangerouslySetInnerHTML={{__html: encryptedResponse}}></pre>
                    </div>
                </div>
                <p class="encryption__code-note">
                    Note: In case of encrypted response if \r\n or escape character \ is observed, it can be replaced by
                    empty string.
                </p>
            </section>
            <section class="encryption__request">
                <div class="encryption__code">
                    <div class="encryption__code-header">
                        <h6 class="encryption__code-title">
                            Java
                        </h6>
                        <a href="/" class="encryption__code-copy">
                            <svg width="16" height="16" viewBox="0 0 28 28" fill="none" stroke="#97144d"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.9 17.9C3.68855 17.9 3.08283 17.9 2.60502 17.7021C1.96795 17.4382 1.4618 16.932 1.19791 16.295C1 15.8172 1 15.2114 1 14V5.16C1 3.70386 1 2.9758 1.28338 2.41962C1.53265 1.9304 1.9304 1.53265 2.41962 1.28338C2.9758 1 3.70386 1 5.16 1H14C15.2114 1 15.8172 1 16.295 1.19791C16.932 1.4618 17.4382 1.96795 17.7021 2.60502C17.9 3.08283 17.9 3.68855 17.9 4.9M14.26 27H22.84C24.2961 27 25.0242 27 25.5804 26.7166C26.0696 26.4673 26.4673 26.0696 26.7166 25.5804C27 25.0242 27 24.2961 27 22.84V14.26C27 12.8039 27 12.0758 26.7166 11.5196C26.4673 11.0304 26.0696 10.6327 25.5804 10.3834C25.0242 10.1 24.2961 10.1 22.84 10.1H14.26C12.8039 10.1 12.0758 10.1 11.5196 10.3834C11.0304 10.6327 10.6327 11.0304 10.3834 11.5196C10.1 12.0758 10.1 12.8039 10.1 14.26V22.84C10.1 24.2961 10.1 25.0242 10.3834 25.5804C10.6327 26.0696 11.0304 26.4673 11.5196 26.7166C12.0758 27 12.8039 27 14.26 27Z"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            Copy me
                        </a>
                    </div>
                    <div class="encryption__code-body">
                        <pre dangerouslySetInnerHTML={{__html: java}}></pre>
                    </div>
                </div>
            </section>
        </div>
    </div>

  );
};

export default Encryption;
